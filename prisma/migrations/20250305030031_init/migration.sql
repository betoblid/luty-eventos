/*
  Warnings:

  - You are about to drop the column `newsletterId` on the `Preference` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Preference" DROP CONSTRAINT "Preference_newsletterId_fkey";

-- AlterTable
ALTER TABLE "Newsletter" ADD COLUMN     "contentType" TEXT NOT NULL DEFAULT 'text',
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'draft';

-- AlterTable
ALTER TABLE "Preference" DROP COLUMN "newsletterId";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_NewsletterToPreference" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_NewsletterToPreference_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Event_title_startDate_key" ON "Event"("title", "startDate");

-- CreateIndex
CREATE INDEX "_NewsletterToPreference_B_index" ON "_NewsletterToPreference"("B");

-- AddForeignKey
ALTER TABLE "_NewsletterToPreference" ADD CONSTRAINT "_NewsletterToPreference_A_fkey" FOREIGN KEY ("A") REFERENCES "Newsletter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NewsletterToPreference" ADD CONSTRAINT "_NewsletterToPreference_B_fkey" FOREIGN KEY ("B") REFERENCES "Preference"("id") ON DELETE CASCADE ON UPDATE CASCADE;
