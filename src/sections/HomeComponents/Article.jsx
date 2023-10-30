import NewsController  from "../../api/NewsController";
import { ArticleCard } from "../../components/ArticleCard"
import { useQuery } from "@tanstack/react-query";



export const Article = () => {

    const newsController = new NewsController()


    const { data }
      = useQuery({ queryKey : ['everything'], queryFn : newsController.getAllNews})

      console.log(data)

    return (
        <div className="p-[5%] container-lg flex flex-col items-center">
            <h1 className="text-4xl font-black text-blue-500">Read More Articles</h1>
            <div className="grid grid-cols-5">
                {
                   data?.map((news) => (
                        <ArticleCard title={news.title} key={news.id} />
                    ))
                }
            </div>
        </div>
    )

}