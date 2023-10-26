import Top from "../../common/components/Top/Top";
import useGetData from "../../hooks/useGetData";
import React, {useEffect} from "react";
import Spinner from "../../common/components/Spinner/Spinner";

export const Faq = () => {

  const { data, loading, fetchData } = useGetData("data/faq");

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading || !data) {
    return <Spinner size="large" />
  }

  return (
    <div className="page change" id="change">
      <Top
        title="FAQ"
        text="Frequently asked questions"
      />
      <div className="container-fluid">
        {data.map(({image}, index) => (
          <div className="container" key={index}>
            <img src={image} alt={image} className="image-full" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq;
