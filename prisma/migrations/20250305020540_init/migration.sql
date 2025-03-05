-- CreateTable
CREATE TABLE "Subscriber" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "confirmationToken" TEXT,
    "unsubscribeToken" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscriber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Preference" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "newsletterId" TEXT,

    CONSTRAINT "Preference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Newsletter" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Newsletter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsletterRecipient" (
    "id" TEXT NOT NULL,
    "newsletterId" TEXT NOT NULL,
    "subscriberId" TEXT NOT NULL,
    "opened" BOOLEAN NOT NULL DEFAULT false,
    "clicked" BOOLEAN NOT NULL DEFAULT false,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NewsletterRecipient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PreferenceToSubscriber" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PreferenceToSubscriber_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Subscriber_email_key" ON "Subscriber"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Subscriber_confirmationToken_key" ON "Subscriber"("confirmationToken");

-- CreateIndex
CREATE UNIQUE INDEX "Subscriber_unsubscribeToken_key" ON "Subscriber"("unsubscribeToken");

-- CreateIndex
CREATE UNIQUE INDEX "Preference_name_key" ON "Preference"("name");

-- CreateIndex
CREATE UNIQUE INDEX "NewsletterRecipient_newsletterId_subscriberId_key" ON "NewsletterRecipient"("newsletterId", "subscriberId");

-- CreateIndex
CREATE INDEX "_PreferenceToSubscriber_B_index" ON "_PreferenceToSubscriber"("B");

-- AddForeignKey
ALTER TABLE "Preference" ADD CONSTRAINT "Preference_newsletterId_fkey" FOREIGN KEY ("newsletterId") REFERENCES "Newsletter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsletterRecipient" ADD CONSTRAINT "NewsletterRecipient_newsletterId_fkey" FOREIGN KEY ("newsletterId") REFERENCES "Newsletter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsletterRecipient" ADD CONSTRAINT "NewsletterRecipient_subscriberId_fkey" FOREIGN KEY ("subscriberId") REFERENCES "Subscriber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PreferenceToSubscriber" ADD CONSTRAINT "_PreferenceToSubscriber_A_fkey" FOREIGN KEY ("A") REFERENCES "Preference"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PreferenceToSubscriber" ADD CONSTRAINT "_PreferenceToSubscriber_B_fkey" FOREIGN KEY ("B") REFERENCES "Subscriber"("id") ON DELETE CASCADE ON UPDATE CASCADE;
