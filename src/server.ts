import fastify from "fastify";
import cors from '@fastify/cors'
import { createTrip } from "./routes/create-trip";
import { confirmTrip } from "./routes/confirm-trip";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";

const app = fastify();
// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(cors, {
    origin: "*" //Apenas em dev. Produção devemos utilizar o end do frontend
})
app.register(createTrip)
app.register(confirmTrip)

app.listen({ port: 3333 }).then(() => {
    console.log("Server on line...");

})