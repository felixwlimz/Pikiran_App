
export const Happiness = () => {
    return (
        <div className="container-lg  w-full p-[5%] flex flex-col items-center gap-2">
            <h1 className="text-4xl font-black text-blue-600">
                Find happiness within yourself
            </h1>
            <p className="font-semibold text-gray-500">We provide FREE access to various Pikiran features for your mental health needs. #ItsTime to find a happier version of you for a better life</p>

            <div className="grid grid-cols-2 gap-3 mt-6">
                <div>
                    <h1 className="text-2xl font-weight-700">Check your mental health condition here!</h1>
                    <p className="mt-2">Get to know your current wellbeing condition through a set of mental health test</p>
                    <button type="button" className="p-2 mt-6 border w-[40%] border-blue-500 text-blue-500 rounded-xl">Check your mental health</button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
                <div></div>
                <div>
                    <h1 className="text-2xl font-weight-700">Free access to relaxing music </h1>
                    <p className="mt-2">Calm your mind and soul with up to +500 mindfulness relaxing audio content anytime, anywhere.</p>
                    <button type="button" className="p-2 mt-6 border w-[40%] border-blue-500 text-blue-500 rounded-xl">Listen to it</button>
                </div>
            </div>
            

            <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="mr-10">
                    <h1 className="text-2xl font-weight-700">Over 1000+ medicines for your mental health</h1>
                    <p className="mt-2">With over 1000+ mental health medicines for your mental health and help relief your stress</p>
                    <button type="button" className="p-2 mt-6 border w-[40%] border-blue-500 text-blue-500 rounded-xl">Check your mental health</button>
                </div>
            </div>
        </div>
    )
}
