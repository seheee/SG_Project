import express from 'express'
import { clothesBottomController, clothesController, clothesDetailController, clothesOuterController, clothesPopularController, clothesShoesController, clothesTopController, clothesSaleController } from '../controller/clothesController';
import { routes } from '../routes';

export const clothesRouter = express.Router();

clothesRouter.get(routes.clothes,clothesController)
clothesRouter.get(routes.clothesOuter,clothesOuterController)
clothesRouter.get(routes.clothesTop,clothesTopController)
clothesRouter.get(routes.clothesBottom,clothesBottomController)
clothesRouter.get(routes.clothesShoes,clothesShoesController)
clothesRouter.get(routes.clothesPopular,clothesPopularController)
clothesRouter.get(routes.clothesSale,clothesSaleController)
clothesRouter.get(routes.clothesDetail,clothesDetailController)