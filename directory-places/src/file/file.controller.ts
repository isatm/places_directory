import { Controller, Post, UploadedFile, UseInterceptors, Get, Param, Res } from '@nestjs/common';
import { Multer, File as MulterFile } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from './file.service';
import { Response } from 'express';

@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  // Subir un archivo
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: MulterFile) {
    const fileId = await this.fileService.uploadFile(file);
    return { fileId };
  }

  // Descargar un archivo
  @Get(':id')
  async downloadFile(@Param('id') id: string, @Res() res: Response) {
    const fileBuffer = await this.fileService.downloadFile(id);
    res.setHeader('Content-Type', 'application/octet-stream');
    res.send(fileBuffer);
  }
}