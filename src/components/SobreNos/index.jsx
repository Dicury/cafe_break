"use client";
import React from "react";
import {
  Banner,
  BannerContainer,
  BannerFundo,
  ContainerTexto,
  Texto,
  Titulo,
} from "@/components/SobreNos/SobreNos.styles";

function SobreNos() {
  return (
    <>
      <BannerContainer>
        <BannerFundo>
          <Banner src="/images/banner-sobreNos.jpg" />
        </BannerFundo>
      </BannerContainer>

      <ContainerTexto>
        <Titulo>Uma história de amor....por café</Titulo>
        <Texto>
          Há muitos anos, no coração da cidade de Campinas, surgiu uma pequena e
          charmosa cafeteria chamada Cafe Street. A história deste café é uma
          jornada de paixão pelo café e pela comunidade que continua a encantar
          moradores locais e visitantes de todo o mundo. Tudo começou quando eu,
          um apaixonado por café chamado Mateus, decidi seguir meu sonho de
          abrir uma cafeteria única em Campinas. Tive a visão de criar um espaço
          onde as pessoas pudessem se sentir em casa, desfrutar de café de alta
          qualidade e experimentar a cultura do café de uma forma totalmente
          nova. Em 2005, após anos de economias e planejamento meticuloso,
          finalmente abri as portas do Cafe Street. O café estava localizado em
          um prédio histórico que tinha sido cuidadosamente restaurado para
          preservar sua arquitetura original e adicionar um toque moderno e
          acolhedor. A atmosfera era aconchegante, com mesas de madeira rústica
          e sofás confortáveis, criando um ambiente perfeito para relaxar e
          apreciar uma xícara de café. A estrela do Café Cafe Street era, é
          claro, o café. Trabalhei duro para selecionar os grãos mais
          excepcionais de fazendas ao redor do mundo e torrá-los localmente para
          garantir frescor e sabor incomparáveis. Os baristas do Cafe Street
          eram verdadeiros artistas, treinados para criar as bebidas de café
          mais deliciosas, desde espressos robustos até cappuccinos com arte
          latte elaborada. Além do café de alta qualidade, o Café Cafe Street
          rapidamente se tornou conhecido por sua comida deliciosa. Oferecíamos
          uma variedade de bolos e doces caseiros, sanduíches gourmet e opções
          saudáveis, atraindo um público diversificado de clientes em busca de
          uma refeição rápida ou de um lugar para passar horas conversando com
          amigos. Mas o Cafe Street não era apenas uma cafeteria. Tornou-se um
          local de encontro para a comunidade de Campinas. Realizávamos eventos
          regulares, como noites de música ao vivo, exposições de arte local e
          sessões de leitura de livros. O café era um espaço onde as pessoas
          podiam se reunir, compartilhar histórias e criar memórias especiais.
          Ao longo dos anos, o Cafe Street cresceu e se expandiu, abrindo
          filiais em outras partes da cidade e até mesmo em cidades vizinhas. No
          entanto, nunca perdemos de vista nossa missão original de oferecer
          excelente café e um ambiente acolhedor para todos. Hoje, o Cafe Street
          é um marco em Campinas e uma parte querida da vida da comunidade. A
          história desta cafeteria é uma história de paixão pelo café, dedicação
          à qualidade e amor pela comunidade. Esperamos continuar servindo café
          delicioso e criando momentos memoráveis para todos que nos visitam por
          muitos anos vindouros.
        </Texto>
      </ContainerTexto>
    </>
  );
}

export default SobreNos;
