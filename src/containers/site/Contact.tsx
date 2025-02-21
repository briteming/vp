import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import React from "react";
import Markdown from "react-markdown";
const BLUR_FADE_DELAY = 0.04;
export default function Contact() {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-3">
            <div className="capitalize inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Liên hệ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Nhắn Tin Với Tôi
            </h2>
            <p className="text-center text-sm text-gray-600">
              Nếu bạn có bất kỳ câu hỏi nào hoặc muốn trao đổi về cơ hội hợp
              tác, vui lòng liên hệ với tôi qua các kênh sau:
            </p>
            <div className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              <Markdown className="text-pretty text-center leading-7 font-sans text-sm  dark:prose-invert">
                {DATA.contact.text}
              </Markdown>
            </div>
            <p className="text-muted-foreground text-[10px]">
              {DATA.updated_at}
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
