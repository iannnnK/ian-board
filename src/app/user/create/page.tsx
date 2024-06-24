export default function UserCreatePage() {
    return (
        <>
            <form action="joinsuccess" method="post">
                <div>
                    <ul>
                        <li>
                            <span>아이디 </span>
                            <span>사용 가능한 아이디입니다.</span>
                            <span>아이디가 이미 존재합니다.</span>
                            <input
                                type="email"
                                placeholder="메일주소를 입력하세요"
                                id="memEmail"
                                name="memEmail"
                                required
                            />
                        </li>
                        <li>
                            <span>패스워드 </span>
                            <br />
                            <input
                                type="password"
                                placeholder="패스워드를 입력하세요"
                                class="box2"
                                id="memPasswd"
                                required
                            />
                        </li>
                        <li>
                            6665555
                            <span>패스워드 확인 </span>
                            <span id="alert-success">
                                비밀번호가 일치합니다.
                            </span>
                            <span id="alert-danger">
                                비밀번호가 일치하지 않습니다.
                            </span>
                            <br />
                            <input
                                type="password"
                                placeholder="패스워드를 한번 더 입력하세요"
                                class="box2"
                                id="confmemPasswd"
                                required
                            />
                        </li>
                        <li>
                            <span>이름 </span>
                            <br />
                            <input
                                type="text"
                                placeholder="이름을 입력하세요"
                                id="memName"
                                class="box3"
                                required
                            />
                        </li>
                        <li>
                            <span>생년월일 </span>
                            <br />
                            <input type="date" id="memBirthdate" required />
                        </li>
                        <li>
                            <span>휴대폰번호 </span>
                            <br />
                            <input
                                type="text"
                                placeholder="하이픈('-')없이 숫자만 입력하세요"
                                name="memPhone"
                                id="memPhone"
                                class="box3"
                                maxlength="13"
                                required
                            />
                        </li>
                        <li>
                            <button id="new">가입하기</button>
                        </li>
                    </ul>
                </div>
            </form>
        </>
    );
}
