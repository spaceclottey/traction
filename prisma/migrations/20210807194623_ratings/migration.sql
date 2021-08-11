-- CreateTable
CREATE TABLE "Tap" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL DEFAULT E'Public',
    "trigger" TEXT NOT NULL DEFAULT E'No trigger',
    "action" TEXT NOT NULL DEFAULT E'No action',
    "rated" TEXT NOT NULL DEFAULT E'false',
    "streak" INTEGER NOT NULL DEFAULT 0,
    "created" INTEGER NOT NULL DEFAULT 0,
    "frequency" TEXT NOT NULL DEFAULT E'Daily',

    PRIMARY KEY ("id")
);
