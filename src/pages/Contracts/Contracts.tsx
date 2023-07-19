import React, { useState, useEffect } from 'react';
import { ethers, toBigInt } from 'ethers'
import './info.scss'
import { ADDRESS, URL }  from './info.ts'


class Ethernets {
    provider: ethers.JsonRpcProvider;
    
    constructor(rpcUrl:string) {
        try {
            this.provider = new ethers.JsonRpcProvider(rpcUrl);
        } catch (error) { console.error(error)}
    }
}

const ETH = new Ethernets(URL.ethRPC)



export const ContractInfo = () => {
    const ethMsg = 'ETH Block Number'
    const gasMsg = 'Esitmated Gas Price'
    const [info, setInfo] = useState<JSX.Element>(<>{''}</>)
    const [block, setBlock] = useState<any>(ethMsg)
    const [gas, setGas] = useState<any>(gasMsg)
    const [wait, setWait] = useState<boolean>(false)

    useEffect(() => {
        


        const makeContractLine = (_link:string, _text:string, _address:string) => {
            return (
                <h4 className='centered'>
                    <a href={_link + _address} target='_blank' rel="noreferrer">{_text} Contract</a>
                    <small>{_address}</small><br/>
                </h4>
            )
        }

        const makePairLine= (_link:string, _chain:string, _swap:string, _address:string) => {
            let url:string
            if(_chain === 'Polygon') {
                url = _link + '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/0x58c1BBb508e96CfEC1787Acf6Afe1C7008A5B064?fee=100&twap=true&chainId=137'
            } else { url = _link + _address}
            return (
                <h4 className='centered'>
                    <a href={url} target='_blank' rel="noreferrer">{_chain} DEX Pair {_swap}</a>
                    <small>{_address}</small><br/>
                </h4>
            )
        }
        const contracts = <div>
            {makeContractLine('https://etherscan.io/token/', 'Eth', ADDRESS.eth.hoge)}
            {makeContractLine('https://bscscan.com/address/', 'BSC', ADDRESS.bsc.hoge)}
            {makeContractLine('https://polygonscan.com/address/', 'Polygon', ADDRESS.polygon.hoge)}
            {makeContractLine('https://ftmscan.com/token/', 'FTM', ADDRESS.ftm.hoge)}
            {makeContractLine('https://blockscout.com/xdai/mainnet/address/', 'xDai', ADDRESS.xdai.hoge)}
            {makeContractLine('https://www.oklink.com/en/okc/address/', 'OKC', ADDRESS.okc.hoge)}
        </div>

        const pairs = <div>
            {makePairLine('https://v2.info.uniswap.org/pair/', 'Eth', 'Uniswap', ADDRESS.eth.pair)}
            {makePairLine('https://pancakeswap.finance/info/pools/', 'BSC','Pancakeswap', ADDRESS.bsc.pair)}
            {makePairLine('https://app.sushi.com/trident/pool/', 'Polygon','Sushiswap', ADDRESS.polygon.pair)}
            {makePairLine('https://info.shibafantom.finance/pair/', 'FTM','Shibaswap', ADDRESS.ftm.pair)}
            {makePairLine('https://info.honeyswap.org/#/pair/', 'xDai','Honeyswap', ADDRESS.xdai.pair)}
            {makePairLine('https://okinfo.cherryswap.net/pair/', 'OKC','Cherryswap', ADDRESS.okc.pair)}
        </div>

        if (contracts!==undefined && pairs !== undefined) {

            setInfo(<div className='centered style1'>   
            <h2 id='ethBlock'>
                {block}<br/>
                {gas}<br/>    
            </h2>
            <div id='note'>* updates every minute *</div>
            <div className='bumper'>Hoge Contracts & Pairs</div>
            <div className='infoDiv centered'>
                <div className='contracts'>{contracts}</div>
                <br/>
                <div className='pairs'>{pairs}</div>
            </div>
        </div> )
        }

        const go = async () => {
            if (block !== ethMsg || gas !== gasMsg) {return}
            
                if (block === ethMsg){
                    await ETH.provider?.getBlockNumber()
                    .then((res) => {
                        setBlock("Current ETH block number: " +  res)
                    })
                }
                if (gas === gasMsg && ETH.provider !== undefined) {
                    const feeData = JSON.parse(JSON.stringify(await ETH.provider.getFeeData()));
                    console.log(feeData)
                    const gasFee = toBigInt(feeData?.gasPrice) //await feeData?.gasPrice()
                    let wei
                    if (gasFee) {
                        wei = gasFee * toBigInt(10**9)

                        setGas("Estimated Gas Price: " + 
                            ethers.formatEther(wei).toString().split('.')[0] +
                            ' Gwei')
                    }   
                } 

            console.log('Go')
        }

        function clearStates() {
            setBlock(ethMsg)
            setGas(gasMsg)
            setWait(false)
        }

        if (!wait){
            go()
            setWait(true)
            const min = 60 * 1000
            window.setTimeout(clearStates, 1*min)
        }
        
    }, [block, gas, wait])

    return info
}
    
export default ContractInfo
