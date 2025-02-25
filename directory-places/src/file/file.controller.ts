import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Get,
  Param,
  Res,
} from '@nestjs/common';
import { Multer, File as MulterFile } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from './file.service';
import { Response } from 'express';

/**
 * Controlador para gestionar la carga y descarga de archivos.
 */
@Controller('files')
export class FileController {
  /**
   * Constructor del controlador de archivos.
   * @param fileService Servicio para la gestión de archivos.
   */
  constructor(private readonly fileService: FileService) {}

  /**
   * Sube un archivo a GridFS.
   * @param file Archivo recibido a través de Multer.
   * @returns ID del archivo almacenado en GridFS.
   */
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: MulterFile) {
    const fileId = await this.fileService.uploadFile(file);
    return { fileId };
  }

  /**
   * Descarga un archivo desde GridFS.
   * @param id ID del archivo a descargar.
   * @param res Objeto de respuesta de Express.
   */
  @Get(':id')
  async downloadFile(@Param('id') id: string, @Res() res: Response) {
    const fileBuffer = await this.fileService.downloadFile(id);
    res.setHeader('Content-Type', 'application/octet-stream');
    res.send(fileBuffer);
  }
}
