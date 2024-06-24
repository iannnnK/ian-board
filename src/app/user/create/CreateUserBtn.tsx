'use client'

export default function CreateUserBtn() {
    const handleClick = async (event: { preventDefault: () => void; }) => {
        event.preventDefault(); // 기본 동작을 막습니다.

        // const boardCreateDto: BoardCreateDto = getFormData();
        // boardCreateDto.writer = 'ian';
        // boardCreateDto.create_at = new Date();
        // await createBoard(boardCreateDto);
        console.log('가입버튼 클릭');
    };

    return (
        <div id="create-btn-wrap">
            <button
                type="submit"
                className="button purple large"
                id="user-create-btn"
                onClick={handleClick}
            >
                가입하기
            </button>
        </div>
    );
}