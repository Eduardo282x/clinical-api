import { Request, Response } from "express";
import { prismaClient } from "./base.controller";
import { BaseResponse } from "../models/base.response";
import { services } from "../data/services.data";
import { Services } from "../models/services.model";

const responseServices: BaseResponse = {
    message: '',
    success: true,
    statusCode: 200
};

const servicesLoadData = async (req: Request, res: Response) => {
    const loadServices = await prismaClient.services.createMany(
        {data: services}
    );

    if (loadServices) {
        responseServices.message = 'Servicios cargados exitosamente.';
        responseServices.success = true;
        responseServices.statusCode = 200;
    } else {
        responseServices.message = 'Ha ocurrido un error inesperado';
        responseServices.success = false;
        responseServices.statusCode = 400;
    }

    res.send(responseServices);
}

const servicesAll = async (req: Request, res: Response) => {
    const allServices: Services[] = await prismaClient.services.findMany();

    res.send(allServices);
}

const servicesCreate = async (req: Request, res: Response) => {
    const servicesBody: Services = req.body;

    const newServices = await prismaClient.services.create({
        data: {
            codService: servicesBody.codService,
            description: servicesBody.description,
            cost: servicesBody.cost,
            avalible: servicesBody.avalible
        }
    });

    if (newServices) {
        responseServices.message = 'Servicio creado exitosamente.';
        responseServices.success = true;
        responseServices.statusCode = 200;
    } else {
        responseServices.message = 'Ha ocurrido un error inesperado';
        responseServices.success = false;
        responseServices.statusCode = 400;
    }
    res.send(responseServices);
}
const servicesUpdate = async (req: Request, res: Response) => {
    const servicesBody: Services = req.body;

    const update = await prismaClient.services.update({
        where: { idService: servicesBody.idService },
        data: {
            codService: servicesBody.codService,
            description: servicesBody.description,
            cost: servicesBody.cost,
            avalible: servicesBody.avalible
        }
    });

    if (update) {
        responseServices.message = 'Servicio actualizado exitosamente.';
        responseServices.success = true;
        responseServices.statusCode = 200;
    } else {
        responseServices.message = 'Ha ocurrido un error inesperado';
        responseServices.success = false;
        responseServices.statusCode = 400;
    }

    res.send(responseServices);
}

export const servicesController = {
    servicesLoadData,
    servicesAll,
    servicesCreate,
    servicesUpdate
}
