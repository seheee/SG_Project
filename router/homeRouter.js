import express from 'express'
import { homeController, joinController, loginController, logoutController, searchController, uploadController } from '../controller/globalController';
import { routes } from '../routes';

export const homeRouter = express.Router();

homeRouter.get(routes.home,homeController)
homeRouter.get(routes.logout,logoutController)
homeRouter.get(routes.login,loginController)
homeRouter.get(routes.join,joinController)
homeRouter.get(routes.search,searchController)
homeRouter.get(routes.upload,uploadController)