import { Request, Response } from "express";
import { prismaClient } from "./base.controller";
import { BaseResponse } from "../models/base.response";


const servicesAvalibles = async (req: Request, res: Response) => {
    const avaliblesServices = await prismaClient.services.findMany(
        {where: {avalible: true}}
    );
    res.send(avaliblesServices);
}

const servicesAll = async (req: Request, res: Response) => {
    const allServices = await prismaClient.services.findMany();
    res.send(allServices);
}

const servicesCreate = async (req: Request, res: Response) => {
    const {codService, description, cost, avalible} = req.body

    const newServices = await prismaClient.services.create({
        data: {codService: codService, description: description, cost: cost, avalible:avalible}
    });

    console.log(newServices);

    const response: BaseResponse = {
        message: 'Servicio creado exitosamente.',
        success: true,
        statusCode: 200
    };
    res.send(response);
}
const servicesUpdate = async (req: Request, res: Response) => {
    const {idService, codService, description, cost, avalible} = req.body

    const update = await prismaClient.services.update({
        where: {idService: idService},
        data: {codService: codService, description: description, cost: cost, avalible:avalible}
    });

    console.log(update);

    const response: BaseResponse = {
        message: 'Servicio actualizado exitosamente.',
        success: true,
        statusCode: 200
    };
    res.send(response);
}

export const servicesController = {
    servicesAvalibles,
    servicesAll,
    servicesCreate,
    servicesUpdate
}