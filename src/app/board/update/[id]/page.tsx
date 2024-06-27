// import { getBoardDetail } from '@/components/board/BoardDetail';
import BoardUpdateDetailForm from '@/components/board/BoardUpdateDetailForm';
import { getBoardDetail } from '../../[id]/page';

export default async function BoardForm({ params }: {params: {id: string}}) {
    const board = await getBoardDetail(params.id);
    
    return (
        <>
            <div id="contents" >
                <BoardUpdateDetailForm id={params.id} initTitle={board.title} initContent={board.content} />
            </div>
        </>
    );
}