import { Controller, Get } from '@nestjs/common';
import * as csvParser from 'csv-parser';
import * as fs from 'fs';

import { transformedData } from 'src/utils/dataTransformation';

@Controller('csv')
export class CsvController {
  @Get()
  async readCsv() {
    const results = [];
    const csvFilePath = 'data.csv';

    return new Promise((resolve, reject) => {
      fs.createReadStream(csvFilePath)
        .pipe(csvParser())
        .on('data', (data) => results.push(data))
        .on('end', () => resolve(transformedData(results)))
        .on('error', (error) => reject(error));
    });
  }
}
