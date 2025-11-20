import { helloRoutes } from "@modules/Hello/hello.routes";
import type { FastifyPluginAsync } from "fastify";
import fp from "fastify-plugin";

export const helloModule: FastifyPluginAsync = fp(async (app) => {
	app.register(helloRoutes);
});
