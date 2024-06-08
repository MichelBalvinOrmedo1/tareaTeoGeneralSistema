import { Module } from '@nestjs/common';
import { EstadoEnvioService } from './estado-envio.service';
import { EstadoEnvioController } from './estado-envio.controller';

@Module({
  controllers: [EstadoEnvioController],
  providers: [EstadoEnvioService],
})
export class EstadoEnvioModule {}
