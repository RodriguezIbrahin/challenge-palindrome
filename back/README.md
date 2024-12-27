# Backend for challenge-palindromo

## Setup

Completar este documento con instrucciones de como instalar y configurar el backend para el reto.

# Requiere una DDBB mongodb

## Variables de entorno

En .env

- MONGO_URI

  > mongodb+srv://<"username">:<"password">@<"cluster-address">/<"database">?<"options">

- PORT

  > Number

## Install

> npm i
> <br/>
> npm start

## Endpoints

- Get palindrome

  > Get /palindrome

- Post palindrome

  > Post /palindrome
  > <br/>
  > body { phase: string }

- Delete palindrome

  > Delete /palindrome/:id
