import { getBoardDetail } from '@/components/board/BoardDetail';
import BoardUpdateDetailForm from '@/components/board/BoardUpdateDetailForm';

export default async function BoardForm({ params }: { params: { id: string } }) {
    // const {title, setTitle} = useState("")

    // const titleRef = useRef();
    // const contentRef = useRef();

    // const getFormData = () => {
    //     const title = titleRef.current.value;
    //     const content = contentRef.current.value;
    //     const id = params.id;
    //     return { id, title, content };
    // };

    const board = await getBoardDetail(params.id);
    // const board = response.json;
    return (
        <>
            <div id="contents" className="">
                {/* <div className="table-wrap mt10">
                    <table className="board-form va-m">
                        <colgroup>
                            <col width="10%" />
                            <col />
                        </colgroup>
                        <tbody>
                            <BoardUpdateDetailForm title={response.title} content={response.content}/>
                        </tbody>
                    </table>
                </div>
                <UpdateBoardBtn getFormData={getFormData} /> */}
                <BoardUpdateDetailForm id={params.id} initTitle={board.title} initContent={board.content} />
            </div>
        </>
    );
}