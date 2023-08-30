import { Form, Input } from "antd";
import { useToast, Button, useClipboard } from "@chakra-ui/react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import "./ShortLink.scss";
import Resources from "./Resources";
import { useEffect, useState } from "react";
import { axiosClassic } from "../../config/axios.interceptors";

const ShorterLink = () => {
  const [value, setValue] = useState("");
  const [copyUrl, setCopyUrl] = useState([]);
	const [loading, setLoading] = useState(false)
	const toast = useToast()


  const shortly = () => {
		setLoading(true)
		if (value) {
			axiosClassic
      .post(`/shorten?url=${value && value.slice(8)}`)
      .then((res) => {
        setCopyUrl(res.data.result);
				setValue("")

				toast({
					title: "Success!",
					status: "success",
					position: "top-right"
				})
      })
      .catch((err) => {
				console.log(err);
				setValue("")
				toast({
					title: "Please enter the correct url!",
					status: "error",
					position: "top-right"
				})
      })
			.finally(() => {
				setLoading(false)
			})

		} else {
			toast({
				title: "Please enter the correct url!",
				status: "error",
				position: "top-right"
			})
			setLoading(false)
		}
  };

  return (
    <>
      <div className="shorten bg-gray-300 min-h-[100vh] relative w-full pt-[80px] pb-[70px]">
        <div className="container">
          <div className="form-bg rounded-md absolute top-[-75px]">
            <Form
              onFinish={shortly}
              // id="link-shorter"
              className="shorten-form flex w-[90%] mx-auto h-full items-center gap-4"
            >
              <Form.Item 
								// name={"name"}z`
								required={true}
								rules={[
									{
										required: true,
										message: "Please add a link!"
									}
								]}
								className="w-full my-auto">
                <Input
									// name="name"
									// id="link-shorter"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  className="px-4 py-2 w-full text-[20px]"
                  placeholder="Shorten a link here ..."
                />
              </Form.Item>
              <Form.Item className="btn-form w-[20%] my-auto">
                <Button disabled={loading} type="submit" className="bg-teal-500 rounded-md text-[20px] w-full text-white border-none px-4 py-2 transform active:scale-95 hover:bg-teal-400 duration-200">
                  Shorten It!
                </Button>
              </Form.Item>
            </Form>
          </div>
          {/* Link started */}
							<div className="link my-4 flex flex-col gap-4 mb-[50px]">
								<div className={`${copyUrl.length === 0 ? "hidden" : ""} link-detail bg-white rounded-md`}>
                <div className="url w-[90%] mx-auto py-2 flex items-center justify-between">
                  <h1 className="font-medium text-[18px]">
                    {copyUrl?.original_link}
                  </h1>
									<hr />
                  <span className="flex items-center gap-4">
                    <input type="url" value={copyUrl?.full_short_link} className="outline-none text-teal-500 font-medium text-[18px]" />
										<CopyToClipboard text={copyUrl?.full_short_link}>
                    	<Button onClick={() => {
												toast({
													title: "Copied!",
													status: "success",
													position: "top-right"
												})
											}} className="outline-none bg-teal-500 rounded-md px-4 py-2 text-white transform active:scale-95 hover:bg-teal-400 duration-200">
												Copy
                    	</Button>
										</CopyToClipboard>
                  </span>
                </div>
              </div>
          </div>
          {/* Link ended */}

            <div className="advanced mx-auto flex justify-center items-center flex-col mb-[35px]">
              <h1 className="font-bold text-[#34313D] text-[50px]">
                Advanced Statistic
              </h1>
              <p className="text-gray-500 font-medium max-w-[500px] text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                doloremque dolor sint, saepe veritatis rem.
              </p>
            </div>

            <Resources />
        </div>
      </div>
    </>
  );
};

export default ShorterLink;
