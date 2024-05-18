/*
  Warnings:

  - Added the required column `startTime` to the `OnRampTransaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OnRampTransaction" ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;
