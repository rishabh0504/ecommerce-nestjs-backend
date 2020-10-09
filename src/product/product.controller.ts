import { Body, Controller, Get, Param, Post, Put, UploadedFile, UploadedFiles, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { editFileName, imageFileFilter } from 'src/util/file-upload';
import { ProductService } from './product.service';
import { diskStorage, File } from 'multer';
import { InternalServerErrorException } from '@nestjs/common';
import { Product, UpdateProduct } from './product.dto';

const path = require('path');

const myStorage = diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads/');
  },
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    const extension = path.extname(file.originalname).toLowerCase()
    const mimetyp = file.mimetype
    if (extension !== '.jpg' || mimetyp !== 'image/jpg') {
      cb(new InternalServerErrorException('Only images are allowed'));
    }
    cb(null, true);
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '_' + Date.now() + '.jpg');
  }
});


@Controller('products')
export class ProductController {

  constructor(
    private productService: ProductService
  ) { }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() product: Product) {
    return this.productService.create(product);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  update(@Param('id') id: string, @Body() product: UpdateProduct) {
    return this.productService.update(id, product);
  }
}
