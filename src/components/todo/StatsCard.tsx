export const StatsCard = ({ stats }: any) => {
    return <>
        <div className="bg-white  shadow-[0_4px_8px_rgba(0,0,0,0.25)] dark:bg-gray-900 rounded-[10px]  border border-gray-200 dark:border-gray-800  py-3   mb-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-8 text- sm:[16px] font-semibold text-gray-900 dark:text-gray-100">
                <div className="sm:text-center">
                    <div className="mb">
                        <span className=" mr-1">
                            All:
                        </span>
                        <span className="">
                            {stats.all}
                        </span>
                    </div>
                </div>
                <div className="sm:text-center">
                    <div className="mb-1">
                        <span className=" mr-1">
                            Active:
                        </span>
                        <span >
                            {stats.active}
                        </span>
                    </div>
                </div>
                <div className="sm:text-center">
                    <div className="mb-1">
                        <span className="mr-1">
                            Completed:
                        </span>
                        <span >
                            {stats.completed}
                        </span>
                    </div>
                </div>
            </div>
        </div>


    </>
}