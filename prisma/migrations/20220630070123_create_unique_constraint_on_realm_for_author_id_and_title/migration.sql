/*
  Warnings:

  - A unique constraint covering the columns `[authorId,title]` on the table `Realm` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Realm_authorId_title_key" ON "Realm"("authorId", "title");
