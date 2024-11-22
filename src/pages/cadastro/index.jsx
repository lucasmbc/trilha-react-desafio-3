import React from "react";
import { Header } from "../../components/Header";
import {
    Column,
    Container,
    CriarText,
    FazerLogin,
    SubtitleSignUp,
    Title,
    TitleSignUp,
    Wrapper,
} from "./styles";
import { Input } from "../../components/Input";
import { MdAccountCircle, MdEmail, MdLock } from "react-icons/md";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import axios from "axios";

export const Cadastro = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(
                "http://localhost:8001/users",
                data
            );

            alert("Usuário cadastrado com sucesso!");
            reset();
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            alert("Erro ao cadastrar o usuário.");
        }
    };

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as
                        principais tecnologias e entrar mais rápido nas empresas
                        mais desejadas.
                    </Title>
                </Column>

                <Column>
                    <Wrapper>
                        <TitleSignUp>Comece agora grátis</TitleSignUp>

                        <SubtitleSignUp>
                            Crie sua conta e make the change._
                        </SubtitleSignUp>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                type="text"
                                placeholder="Nome completo"
                                leftIcon={<MdAccountCircle />}
                                name="text"
                                control={control}
                                {...register("nome", {
                                    required: "Nome é obrigatório.",
                                    minLength: {
                                        value: 2,
                                        message:
                                            "Nome deve ter no mínimo 2 caracteres",
                                    },
                                })}
                            />
                            {errors.nome && <span>{errors.nome.message}</span>}

                            <Input
                                type="email"
                                placeholder="E-mail"
                                leftIcon={<MdEmail />}
                                name="email"
                                control={control}
                                {...register("email", {
                                    required: "O email é obrigatório",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Formato de email inválido",
                                    },
                                })}
                            />
                            {errors.email && (
                                <span>{errors.email.message}</span>
                            )}

                            <Input
                                type="password"
                                placeholder="Senha"
                                leftIcon={<MdLock />}
                                name="senha"
                                control={control}
                                {...register("senha", {
                                    required: "A senha é obrigatória",
                                    minLength: {
                                        value: 6,
                                        message:
                                            "A senha deve ter no mínimo 6 caracteres",
                                    },
                                })}
                            />
                            {errors.senha && (
                                <span>{errors.senha.message}</span>
                            )}

                            <Button
                                title="Criar minha conta"
                                variant="secondary"
                                type="submit"
                            />
                        </form>

                        <CriarText>
                            Ao clicar em "criar minha conta grátis", declaro que
                            aceito as Políticas de Privacidade e os Termos de
                            Uso da DIO.
                        </CriarText>

                        <FazerLogin>
                            Já tenho conta.{" "}
                            <span>
                                <a href="http://localhost:3000/login">
                                    Fazer login
                                </a>
                            </span>
                        </FazerLogin>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
};
