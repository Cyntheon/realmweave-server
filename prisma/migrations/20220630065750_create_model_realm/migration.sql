-- CreateTable
CREATE TABLE "Realm" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" UUID NOT NULL,
    "title" CITEXT NOT NULL DEFAULT 'Untitled Realm',

    CONSTRAINT "Realm_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Realm" ADD CONSTRAINT "Realm_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
