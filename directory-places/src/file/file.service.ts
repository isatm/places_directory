import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { GridFSBucket, ObjectId, Db } from 'mongodb';
import { Readable } from 'stream';
import { File } from './interfaces/file.interface';

@Injectable()
export class FileService {
  private readonly bucket: GridFSBucket;

  constructor(@InjectConnection() private readonly connection: Connection) {
    if (!this.connection.db) {
      throw new Error('Database connection is not established');
    }
    this.bucket = new GridFSBucket(this.connection.db as unknown as Db, {
      bucketName: 'uploads',
    });
  }

  // Subir un archivo
  async uploadFile(file: File): Promise<string> {
    const readableStream = new Readable();
    readableStream.push(file.buffer);
    readableStream.push(null);

    const uploadStream = this.bucket.openUploadStream(file.originalname);
    readableStream.pipe(uploadStream);

    return new Promise((resolve, reject) => {
      uploadStream.on('finish', () => resolve(uploadStream.id.toString()));
      uploadStream.on('error', reject);
    });
  }

  // Descargar un archivo
  async downloadFile(fileId: string): Promise<Buffer> {
    const fileStream = this.bucket.openDownloadStream(new ObjectId(fileId));
    return new Promise((resolve, reject) => {
      const chunks: Buffer[] = [];
      fileStream.on('data', (chunk) => chunks.push(chunk));
      fileStream.on('end', () => resolve(Buffer.concat(chunks)));
      fileStream.on('error', reject);
    });
  }
}