import { Injectable } from '@nestjs/common';
import { CreateEstadoEnvioDto } from './dto/create-estado-envio.dto';
import { UpdateEstadoEnvioDto } from './dto/update-estado-envio.dto';

@Injectable()
export class EstadoEnvioService {
  create(createEstadoEnvioDto: CreateEstadoEnvioDto) {
    return 'This action adds a new estadoEnvio';
  }

  findAll() {
    return `This action returns all estadoEnvio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estadoEnvio`;
  }

  update(id: number, updateEstadoEnvioDto: UpdateEstadoEnvioDto) {
    return `This action updates a #${id} estadoEnvio`;
  }

  remove(id: number) {
    return `This action removes a #${id} estadoEnvio`;
  }
}
