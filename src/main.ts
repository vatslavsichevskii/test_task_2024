import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { sequelize } from '../config/database.config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        const app = await NestFactory.create(AppModule);

        app.useGlobalPipes(new ValidationPipe());

        const port = process.env.PORT || 3000;
        await app.listen(port);
        console.log(`Server is running on http://localhost:${port}`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
}
bootstrap();
