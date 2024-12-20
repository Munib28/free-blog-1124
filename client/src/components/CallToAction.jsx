import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about JavaScript?</h2>
        <p className="text-gray-500 my-2">
          Checkout these resources with MIM Code JavaScript Projects
        </p>
        <Button
          gradientDuoTone="purpleToBlue"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.mimcode.net/#portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            MIM Code Projects
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          className="rounded-lg"
          src="https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </div>
    </div>
  );
}
