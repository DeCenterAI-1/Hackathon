import { prepareTransaction, toWei, sendTransaction } from "thirdweb";
import { useActiveAccount } from "thirdweb/react";
import { client } from "@/lib/thirdweb";
import { TypedData, Definition } from "ox/TypedData";
import { SignableMessage, Hex } from "viem";
function TopUp() {
  const transaction = prepareTransaction({
    to: "0x718d381a9d62e7673bb365e9c62a024f42ce358f",
    value: toWei("0.5"),
    chain: {
      rpc: `https://296.rpc.thirdweb.com/${process.env.NEXT_PUBLIC_THIRDWEB_SECRET_KEY}`,
      id: 296,
    },
    client,
  });
  const account = useActiveAccount();
  const handle_sumbit = async () => {
    console.log(transaction);
    if (account) {
      await sendTransaction({
        account,
        transaction,
      });
    }
  };
  return (
    <>
      <div>
        <button onClick={handle_sumbit}>top up</button>
      </div>
      <div className="flex column">
        <input type="text" placeholder="amount to top up" />
        <button> TOP-UP</button>
      </div>
    </>
  );
}
export default TopUp;
