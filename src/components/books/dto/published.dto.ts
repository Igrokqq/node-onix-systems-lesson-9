import {
    IsString,
    IsNumber,
    Min,
    Max,
    MinLength,
    MaxLength, IsNotEmpty,
} from 'class-validator';

export class PublishedDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(26)
    readonly publisher: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(1900)
    @Max(3000)
    readonly year: number;
}
