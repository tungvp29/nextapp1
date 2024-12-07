"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/Icon";

const languages = [
  {
    code: "vi",
    name: "VI",
    flag: "emojione:flag-for-vietnam",
  },
  {
    code: "en",
    name: "EN",
    flag: "circle-flags:uk",
  },
];

const LanguageSelector = ({className}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div className={className}>
      <Select
        value={selectedLanguage.code}
        onValueChange={(code) => {
          const lang = languages.find((l) => l.code === code);
          setSelectedLanguage(lang);
        }}
      >
        <SelectTrigger className="border-0 focus:ring-0 focus:ring-offset-0 w-full">
          <div className="w-full flex !justify-between space-x-3 text-sm text-[#5f585c80]">
            <Icon icon={selectedLanguage.flag} className="mr-2" />
            <SelectValue placeholder="Select Language">
              {selectedLanguage.name}
            </SelectValue>
          </div>
        </SelectTrigger>

        <SelectContent>
          {languages.map((lang) => (
            <SelectItem
              key={lang.code}
              value={lang.code}
              className="flex items-center space-x-3"
            >
              <div className="flex items-center space-x-3 w-full">
                <Icon icon={lang.flag} className="mr-1" />
                <span className="text-sm text-[#5f585c80]">{lang.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default LanguageSelector;
