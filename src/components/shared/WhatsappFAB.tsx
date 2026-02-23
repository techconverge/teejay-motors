"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function WhatsappFAB() {
  return (
    <FloatingWhatsApp
      phoneNumber="+2349065566300"
      accountName="Teejay Motors"
      notificationSound
      avatar="https://ucarecdn.com/4ba60e47-d0c4-4575-b0c2-5b8797924428/Group1.png"
    />
  );
}

export default WhatsappFAB;
