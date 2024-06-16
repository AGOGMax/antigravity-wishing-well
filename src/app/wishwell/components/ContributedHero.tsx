import H1 from "@/app/components/HTML/H1";
import H2 from "@/app/components/HTML/H2";
import P from "@/app/components/HTML/P";
import Button from "@/stories/Button";
import Image from "next/image";

export default function ContributedHero() {
	return (
		<div className="relative w-full min-h-screen overflow-hidden">
			<div className="bg-gradient-to-b from-[#0000] h-fit to-[#000] overflow-hidden">
				<div className="flex flex-col justify-center items-center gap-[32px] mx-[16px] pt-[108px] md:pt-[164px] h-fit ">
					<div className="flex flex-col gap-[16px] justify-center items-center">
						<H1 className="text-[52px] leading-[53.76px] md:text-[72px] md:leading-[69.12px] text-agwhite">
							Success!
						</H1>
						<P>Here&apos;s your NFT:</P>
					</div>
					<Image
						src={require("@/app/wishwell/assets/wishwell-contributed-receipt.svg")}
						alt="nft"
						width={349}
						className="max-w-[349px] w-full h-auto md:max-w-[500px] md:w-full md:h-auto"
					/>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-start gap-[64px] px-[16px] py-[32px] md:py-[64px] md:px-[32px] z-0 h-fit">
					<div className="flex flex-col justify-start items-start gap-[8px]">
						<H2 className="text-[56px] leading-[53.76px] md:text-[48px] md:leading-[46.08px] font-black text-agyellow">
							Get 10x Points Now!
						</H2>
						<Button
							innerText="Wishwell.eth"
							iconSrc={require("@/app/assets/icons/copy.svg")}
							iconAlt="info icon"
							iconPosition="end"
						/>
						<Button
							innerText="Wishwell.pls"
							iconSrc={require("@/app/assets/icons/copy.svg")}
							iconAlt="info icon"
							iconPosition="end"
						/>
					</div>

					<div className="flex flex-col gap-[32px] md:gap-[8px] max-w-[50ch]">
						<div className="flex justify-start items-center gap-[16px]">
							<Image
								src={require("@/app/assets/icons/pls.svg")}
								alt="pls"
								width={48}
								height={48}
							/>
							<Image
								src={require("@/app/assets/icons/eth.svg")}
								alt="eth"
								width={48}
								height={48}
							/>
							<Image
								src={require("@/app/assets/icons/usdt.svg")}
								alt="usdt"
								width={48}
								height={48}
							/>
							<Image
								src={require("@/app/assets/icons/usdc.svg")}
								alt="usdc"
								width={48}
								height={48}
							/>
						</div>
						<P>
							As you contribute more, your ERC-721 NFT above will
							uniquely update with future contributions.
						</P>
					</div>
				</div>
				<Image
					src={require("@/app/wishwell/assets/bg.png")}
					alt="background"
					layout="cover"
					objectFit="cover"
					className="absolute top-0 left-0 -z-[1] w-full h-[120%] object-[70%_50%] object-none md:w-full md:h-[110%] md:object-cover"
				/>
			</div>
		</div>
	);
}
