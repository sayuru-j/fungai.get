"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { docs, projectScope, teams, timeline } from "@/constants/grid";
import {
  FaBug,
  FaChartLine,
  FaExchangeAlt,
  FaGoogleDrive,
  FaSearch,
} from "react-icons/fa";
import Image from "next/image";
import { leftStack, rightStack } from "@/constants/stack";
import { cn } from "@/utils/cn";
import { students, supervisors } from "@/constants/team";
import MagicButton from "./ui/magic-button";
import { GoDot } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { GiPropellerBeanie } from "react-icons/gi";
import {
  PiNumberSquareEight,
  PiNumberSquareFive,
  PiNumberSquareFour,
  PiNumberSquareOne,
  PiNumberSquareSeven,
  PiNumberSquareSix,
  PiNumberSquareThree,
  PiNumberSquareTwo,
} from "react-icons/pi";
import { DiOnedrive } from "react-icons/di";
import Link from "next/link";

const Grid = () => {
  const ResearchGapElements = () => {
    const gaps = [
      {
        title: "Identify Unknown Mushrooms",
        description:
          "Experiment with our tools to identify various unknown mushroom species.",
        icon: <FaSearch size={20} />,
      },
      {
        title: "Harvest Time Prediction Models",
        description: "Improve your yield by knowing when to harvest.",
        icon: <FaChartLine size={20} />,
      },
      {
        title: "Detect Mushroom Diseases",
        description:
          "Enhanced methods for detecting diseases in mushrooms and pots.",
        icon: <FaBug size={20} />,
      },
      {
        title: "Connect Sellers & Buyers",
        description: "Be a seller, be a buyer, whatever you want.",
        icon: <FaExchangeAlt size={20} />,
      },
    ];

    return (
      <div className="flex flex-col antialiased">
        {gaps.map((gap) => (
          <div className="py-4 space-y-1" key={gap.title}>
            <div className="flex gap-2 justify-start items-start text-purple">
              <div className="pt-1">{gap.icon}</div>
              <h2 className="font-medium">{gap.title}</h2>
            </div>
            <p className="text-sm font-light">{gap.description}</p>
          </div>
        ))}
      </div>
    );
  };

  const TechStackElements = () => {
    return (
      <div className="flex flex-col w-full justify-center items-center">
        {/* <Image
          src={require("../public/tech_stack.png")}
          alt="stack"
          className="rounded-full w-32 h-32"
        /> */}
        <div className="flex gap-2 p-2 w-full">
          <div
            className="w-1/2 flex flex-col gap-2 justify-center items-center"
            id="leftStack"
          >
            {leftStack.map((stkIt) => {
              return (
                <div
                  className={cn(
                    "rounded-full flex items-center justify-center w-20 h-20 drop-shadow p-4",
                    stkIt.className
                  )}
                  key={stkIt.name}
                >
                  <Image
                    className="fill-white"
                    src={stkIt.image.url}
                    alt={stkIt.name}
                    height={stkIt.image.height}
                    width={stkIt.image.width}
                  />
                </div>
              );
            })}
          </div>
          <div
            className="w-1/2 flex flex-col gap-2 justify-center items-center"
            id="rightStack"
          >
            {rightStack.map((stkIt) => {
              return (
                <div
                  className={cn(
                    "rounded-full flex items-center justify-center w-16 h-16 p-4",
                    stkIt.className
                  )}
                  key={stkIt.name}
                >
                  <Image
                    src={stkIt.image.url}
                    alt={stkIt.name}
                    height={stkIt.image.height}
                    width={stkIt.image.width}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const TeamElements = () => {
    return (
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2" id="leftPanel">
          <h1 className="text-[28px] font-medium ml-6">Developers</h1>
          <div className="flex flex-col gap-2 my-2 p-4">
            {students.map((person) => {
              return (
                <div
                  className="bg-gradient-to-r from-purple/10 to-purple-300 rounded-xl flex"
                  key={person.name}
                >
                  <div className="w-1/4 flex items-center justify-center">
                    <Image
                      className="w-20 h-20 rounded-full"
                      src={person.avatar.url}
                      alt={person.avatar.alt}
                    />
                  </div>
                  <div className="w-3/4 flex flex-col gap-1 p-2">
                    <h1 className="font-semibold">{person.name}</h1>
                    <div className="flex items-center gap-2">
                      {person.tags.map((each) => (
                        <MagicButton
                          className="h-8 text-xs rounded-full cursor-default"
                          icon={<GoDot />}
                          title={each}
                          key={each}
                        />
                      ))}
                    </div>
                    <h1 className="font-medium text-lg">{person.position}</h1>
                    <h1 className="font-light">{person.organization}</h1>
                    <h1 className="font-semibold">{person.department}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full lg:w-1/2" id="rightPanel">
          <h1 className="text-[28px] font-medium ml-6">Supervisors</h1>
          <div className="flex flex-col gap-2 my-2 p-4">
            {supervisors.map((person) => {
              return (
                <div
                  className="bg-gradient-to-l from-purple/10 to-purple-300 rounded-xl flex"
                  key={person.name}
                >
                  <div className="w-1/4 flex items-center justify-center">
                    <Image
                      className="w-20 h-20 rounded-full"
                      src={person.avatar.url}
                      alt={person.avatar.alt}
                    />
                  </div>
                  <div className="w-3/4 flex flex-col gap-1 p-2">
                    <h1 className="font-semibold">{person.name}</h1>
                    <div className="flex items-center gap-2">
                      {person.tags.map((each) => (
                        <MagicButton
                          className="h-8 text-xs rounded-full cursor-default"
                          icon={<GoDot />}
                          title={each}
                          key={each}
                        />
                      ))}
                    </div>
                    <h1 className="font-medium text-lg">{person.position}</h1>
                    <h1 className="font-light">{person.organization}</h1>
                    <h1 className="font-semibold">{person.department}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  const MethodologyElements = () => {
    return (
      <div className="w-full h-full flex justify-center items-center ">
        <Image
          src={require("../public/methodology.png")}
          height={800}
          width={800}
          alt=""
          className="my-4 rounded-2xl transition-all duration-500 ease-in-out"
        />
      </div>
    );
  };

  const LiteratureReview = () => {
    const keyPoints = [
      {
        title: "Identifying Mushroom Species",
        description:
          "Researchers used models like AlexNet, ResNet-50, and GoogLeNet to accurately identify edible and poisonous mushrooms in Thailand.",
      },
      {
        title: "Predicting Growth and Detecting Diseases",
        description:
          "A study in Sri Lanka used IoT devices and Mobile Net V2 models to identify diseases in Oyster mushrooms and determine the best harvest times.",
      },
      {
        title: "Using Smartphones for Harvesting",
        description:
          "Researchers created a large set of photos showing different growth stages of mushrooms. They used a CNN to predict the best harvest times, optimized for mobile devices.",
      },
      {
        title: "Classifying Mushroom Spawn",
        description:
          "To reduce contamination, researchers developed a method to classify oyster mushroom spawn using deep neural networks and other classifiers, achieving 98.8% accuracy.",
      },
      {
        title: "Improving Mushroom Production",
        description:
          "The study highlights the need to provide scientific information to small-scale mushroom producers, helping them become commercial producers and compete in local and international markets.",
      },
    ];

    return (
      <div>
        <h1 className="font-light py-4 gap-6">
          There have been many studies on using machine learning and deep neural
          networks to help with mushroom farming. These studies focus on
          identifying different mushroom species, predicting growth, detecting
          diseases, analyzing cultivation bags, and understanding the market for
          better business decisions.
        </h1>
        {keyPoints.map((point) => {
          return (
            <h2
              key={point.title}
              className="flex flex-col my-4 p-4 bg-gradient-to-l from-purple/10 to-purple-300 rounded-2xl backdrop-blur-md"
            >
              <span className="text-purple">{point.title}</span>
              <span className="text-sm font-light">{point.description}</span>
            </h2>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full">
      <section id="about-project" className="min-h-screen py-10">
        <h2 className="text-[40px] font-bold my-10 text-center">
          Project Scope
        </h2>
        <BentoGrid>
          {projectScope.map(({ className, description, id, title }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
            >
              {id == 1 && <LiteratureReview />}
              {id == 2 && <ResearchGapElements />}
              {id == 3 && <TechStackElements />}
              {id == 4 && <MethodologyElements />}
            </BentoGridItem>
          ))}
        </BentoGrid>
      </section>
      <section id="timeline" className="min-h-screen py-16">
        <h2 className="text-[40px] font-bold my-10 text-center">Timeline</h2>
        <BentoGrid>
          {timeline.map(
            ({
              className,
              description,
              id,
              img,
              imgClassName,
              spareImg,
              title,
              titleClassName,
              altDescription,
            }) => (
              <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
              >
                <h1 className="font-thin">{altDescription}</h1>
                <div className="my-1 text-purple">
                  {id == 1 && <PiNumberSquareOne size={20} />}
                  {id == 2 && <PiNumberSquareTwo size={20} />}
                  {id == 3 && <PiNumberSquareThree size={20} />}
                  {id == 4 && <PiNumberSquareFour size={20} />}
                  {id == 5 && <PiNumberSquareFive size={20} />}
                  {id == 6 && <PiNumberSquareSix size={20} />}
                  {id == 7 && <PiNumberSquareSeven size={20} />}
                  {id == 8 && <PiNumberSquareEight size={20} />}
                </div>
              </BentoGridItem>
            )
          )}
        </BentoGrid>
      </section>

      <section id="docs" className="py-48">
        <h2 className="text-[40px] font-bold my-10 text-center">Docs</h2>
        <BentoGrid>
          {docs.map(
            ({
              className,
              description,
              id,
              img,
              imgClassName,
              spareImg,
              title,
              titleClassName,
            }) => (
              <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
              >
                <div className="flex flex-col items-center justify-center gap-4">
                  <h1 className="text-2xl font-semibold">Access Docs Via</h1>
                  <div className="flex items-center gap-2">
                    <Link
                      target="_blank"
                      href={
                        "https://drive.google.com/drive/folders/128fEF306kEjE36SNQJ9dht9JZ6jYXRkY?usp=sharing"
                      }
                    >
                      <MagicButton
                        title="Google Drive"
                        icon={<FaGoogleDrive />}
                      />
                    </Link>
                    <Link
                      target="_blank"
                      href={
                        "https://mysliit-my.sharepoint.com/:f:/g/personal/it20189112_my_sliit_lk/EjtuPpQGYitKrHSg6-Im_v8B-y-7afxwV8JrnTb6NGdnMw?e=Y3MehO"
                      }
                    >
                      <MagicButton
                        title="One Drive"
                        icon={<DiOnedrive size={24} />}
                      />
                    </Link>
                  </div>
                </div>
              </BentoGridItem>
            )
          )}
        </BentoGrid>
      </section>

      <section id="team" className="min-h-screen py-16">
        <h2 className="text-[40px] font-bold my-10 text-center">Team</h2>
        <BentoGrid>
          {teams.map(
            ({
              className,
              description,
              id,
              img,
              imgClassName,
              spareImg,
              title,
              titleClassName,
            }) => (
              <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
              >
                <TeamElements />
              </BentoGridItem>
            )
          )}
        </BentoGrid>
      </section>
    </div>
  );
};

export default Grid;
