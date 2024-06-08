import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { ProductoModule } from './producto/producto.module';
import { EnvioModule } from './envio/envio.module';
import { EstadoEnvioModule } from './estado-envio/estado-envio.module';
import { MovimientoInventarioModule } from './movimiento-inventario/movimiento-inventario.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ClienteModule,
    ProductoModule,
    EnvioModule,
    EstadoEnvioModule,
    MovimientoInventarioModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tareaTeoria',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
