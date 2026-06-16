/*
  Warnings:

  - The primary key for the `task` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `completedAt` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `interruptedAt` on the `task` table. All the data in the column will be lost.
  - Added the required column `startDate` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `task` DROP PRIMARY KEY,
    DROP COLUMN `completedAt`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `interruptedAt`,
    ADD COLUMN `completeDate` BIGINT NULL,
    ADD COLUMN `interruptDate` BIGINT NULL,
    ADD COLUMN `startDate` BIGINT NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);
