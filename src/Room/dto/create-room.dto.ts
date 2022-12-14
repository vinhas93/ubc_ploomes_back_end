import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional, Max, Min } from 'class-validator';

export class CreateRoomDto {
  @Min(1)
  @Max(4)
  @IsNumber()
  @ApiProperty({
    description: 'Número de cartelas que deseja adquirir (entre 1 e 4)',
    example: 3,
  })
  maxCards: number;

  @Min(10)
  @Max(75)
  @IsNumber()
  @ApiProperty({
    description: 'Limite de sorteios (entre 10 e 75)',
    example: 30,
  })
  limitPrizeDraw: number;

  @Min(1)
  @Max(6)
  @IsNumber()
  @ApiProperty({
    description: 'Limite de registro de bolas (de 1 a 6)',
    example: 5,
  })
  limitRecord?: number;

  @IsInt()
  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'Limite de jogadores na sala',
    example: 3,
  })
  limitUsers: number;

  @IsNumber()
  @ApiProperty({
    description: 'Preço a ser pago por cartela',
    example: 10,
  })
  price: number;

  @Min(1)
  @Max(15)
  @IsNumber()
  @ApiProperty({
    description:
      'Tempo de sorteio entre uma bola e outra, em segundos (entre 1 e 15)',
    example: 10,
  })
  frequency: number;
}
