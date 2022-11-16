import {FilmController} from "./film.controller";
import {FilmService} from "./film.service";
import {Module} from "@nestjs/common";

@Module({
    imports: [],
    controllers: [FilmController],
    providers: [FilmService],
    exports: [FilmService],
})
export class FilmModule {}