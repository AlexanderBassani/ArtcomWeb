import { Box, Flex, Button, Icon, useColorModeValue } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "./Input";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { MdSend, MdCancel } from "react-icons/md";
import { useRouter } from "next/dist/client/router";

type SendEmailProps = {
  name: string;
  email: string;
  contact: string;
  jobPretended: string;
};

const createDocumentSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Campo obrigatório"),
  contact: yup.string().required("Campo obrigatório"),
  jobPretended: yup.string().required("Campo obrigatório"),
});

export function Form() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(createDocumentSchema),
  });
  const { back } = useRouter();
  const { addToast } = useToasts();
  const { errors } = formState;

  const handleSendEmail: SubmitHandler<SendEmailProps> = async (values) => {
    try {
      setLoading(true);
      console.log(values);
      setLoading(false);
      reset();
      addToast("Mensagem salva com sucesso", {
        appearance: "success",
        autoDismiss: true,
      });
    } catch {
      setLoading(false);
      addToast("Não foi possível realizar o envio. Tente novamente", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <Flex
      width={["90vw", "70vw"]}
      bgColor="yellow.700"
      borderRadius="sm"
      align="center"
      flexDirection="column"
    >
      <Box as="form" onSubmit={handleSubmit(handleSendEmail)} mb="8">
        <Flex mt="10" flexDirection="column" gridGap="4" ml="6">
          <Input
            name="name"
            placeholder="Nome"
            width={["68vw", "50vw"]}
            {...register("name")}
            error={errors.name}
          />
          <Input
            name="email"
            placeholder="Email"
            width={["68vw", "50vw"]}
            {...register("email")}
            error={errors.email}
          />
          <Input
            name="contact"
            placeholder="Telefone"
            width={["68vw", "50vw"]}
            {...register("contact")}
            error={errors.contact}
          />
          <Input
            name="jobPretended"
            placeholder="Cargo pretendido"
            width={["68vw", "50vw"]}
            {...register("jobPretended")}
            error={errors.jobPretended}
          />
        </Flex>
        <Flex flexDirection="row" mt="6" align="center" gridGap="4" ml="6">
          <Button
            bg="yellow.700"
            borderColor="black"
            _hover={{
              bg: useColorModeValue("yellow.800", "whiteAlpha.200"),
            }}
            rightIcon={<Icon as={MdCancel} />}
            onclick={back}
          >
            Cancelar
          </Button>
          <Button
            bg="yellow.700"
            _hover={{
              bg: useColorModeValue("yellow.800", "whiteAlpha.200"),
            }}
            rightIcon={<Icon as={MdSend} />}
            isLoading={loading}
            disabled={loading}
            type="submit"
          >
            Enviar
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
