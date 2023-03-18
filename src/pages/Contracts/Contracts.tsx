import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import './info.css'
import { address, scanner, opti, url } from './info.ts';


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
                <h3 className='centered'>
                    {_text} <a href={_link + _address} target='_blank' rel="noreferrer">contract</a>
                    <small className='bumper'>{_address}</small><br/>
                </h3>
            )
        }

        const makePairLine= (_link:string, _chain:string, _swap:string, _address:string) => {
            let url:string
            if(_chain === 'Polygon') {
                url = _link + '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/0x58c1BBb508e96CfEC1787Acf6Afe1C7008A5B064?fee=100&twap=true&chainId=137'
            } else { url = _link + _address}
            return (
                <h3 className='centered'>
                    {_chain} dex pair <a href={url} target='_blank' rel="noreferrer">{_swap}</a>
                    <small className='bumper'>{_address}</small><br/>
                </h3>
            )
        }
        const contracts = <div className='contracts'>
            {makeContractLine( scanner.eth, 'Eth', address.eth.hoge)}
            {makeContractLine( scanner.bsc, 'BSC', address.bsc.hoge)}
            {makeContractLine( scanner.polygon, 'Polygon', address.polygon.hoge)}
            {makeContractLine( scanner.ftm, 'FTM', address.ftm.hoge)}
            {makeContractLine( scanner.xdai, 'xDai', address.xdai.hoge)}
            {makeContractLine( scanner.okc, 'OKC', address.okc.hoge)}
        </div>

        const pairs = <div  className='pairs bumper'>
            {makePairLine( scanner.eth, 'Eth', 'Uniswap', address.eth.pair)}
            {makePairLine( scanner.bsc, 'BSC','Pancakeswap', address.bsc.pair)}
            {makePairLine( scanner.polygon, 'Polygon','Sushiswap', address.polygon.pair)}
            {makePairLine( scanner.ftm, 'FTM','Shibaswap', address.ftm.pair)}
            {makePairLine( scanner.xdai, 'xDai','Honeyswap', address.xdai.pair)}
            {makePairLine( scanner.okc, 'OKC','Cherryswap', address.okc.pair)}
        </div>

        if (contracts!==undefined && pairs !== undefined) {

            setInfo(<div className='centered'>   
                <h2 id='ethBlock'>
                        {block}<br/>
                        {gas}<br/>    
                    </h2>
                <div id='note'>* updates every minute *</div>
                <div className='infoDiv centered'>
                    <h2 id='optiswap'>
                        <a href={opti.swap} target='_blank' rel="noreferrer">OptiSwap</a><br/>
                        <a href={opti.group} target='_blank' rel="noreferrer">GroupLP</a><br/>
                        <a href={opti.otc} target='_blank' rel="noreferrer">OTCswap</a><br/>
                    </h2>
                    {contracts}
                    ~ ~ ~ ~ ~<br/>
                    {pairs}
                </div>
            </div>)
        }

        const go = async () => {
            if (block !== ethMsg || gas !== gasMsg) {return}
            const api = process.env.REACT_APP_INFURA_API_KEY
            if (api!==undefined) {
                var customHttpProvider = new ethers.JsonRpcProvider(url.infura + api)
                if (block === ethMsg){
                    await customHttpProvider.getBlockNumber()
                    .then((res) => {
                        setBlock("Current ETH block number: " +  res)
                    })
                }
                if (gas === gasMsg) {
                    await customHttpProvider.getFeeData()
                    .then((res) => {
                        const maxFee = res.maxFeePerGas
                        if (maxFee != null){console.log('gas price', ethers.formatUnits(maxFee, "gwei"))
                            setGas( "Estimated Gas Price: " +
                             ethers.formatUnits(maxFee, "gwei").toString().split('.')[0] )
                                
                        }
                    })
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
