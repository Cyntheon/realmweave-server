-- CreateTable
CREATE TABLE "Lore" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" UUID NOT NULL,
    "realmId" UUID NOT NULL,
    "title" CITEXT NOT NULL DEFAULT 'Untitled Lore',
    "contents" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Lore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lore_authorId_realmId_title_key" ON "Lore"("authorId", "realmId", "title");

-- AddForeignKey
ALTER TABLE "Lore" ADD CONSTRAINT "Lore_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lore" ADD CONSTRAINT "Lore_realmId_fkey" FOREIGN KEY ("realmId") REFERENCES "Realm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
