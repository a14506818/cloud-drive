# Google Drive Clone

### `簡介`
這是個簡易版的雲端硬碟，主要的功能都是建立於Firebase上，包含Authentication、Firestore及Storage。提供以email註冊的身分驗證和雲端空間，讓使用者新增資料夾、上傳檔案等。由於此專案的目的主要是要學習Firebase及React，所以決定使用React-Boostrap來節省設計美觀樣式的時間。
###### tags: React, Hooks, Firebase, Authentication, NoSQL, Boostrap

## A. 作品展示 

### `a.網址`
https://a14506818.github.io/cloud-drive/#/

### `b.環境架設`
此專案的後端是由Firebase提供，網站則是架設在GithubPages上，**不需要其他額外設定**。

## B. 專案架構 

### `a.身分驗證`
### 1. Login
首先一進到網站就會看到都入畫面，已經有帳號的話，直接登入便會轉跳到雲端硬碟頁面。若是新用戶，可點選下方的Sign Up來註冊帳號。如果密碼遺失，這邊也有重設密碼的服務。
![](https://i.imgur.com/CIHEzsk.png)

### 2. Sign Up
註冊帳號會要求使用者輸入電子信箱及一組密碼，並重複確認一次密碼避免輸入錯誤。要注意的是，雖然我們沒有要求密碼要有英文或數字，但Firebase的基本要求是**6字元以上**。註冊完成後便會自動登入。
![](https://i.imgur.com/M3vP4EC.png)

### 3. Password Reset
密碼重設時，請輸入email，便會寄出信件提供修改。再來到信箱點選重設連結，輸入新密碼並儲存便完成了密碼重設。
![](https://i.imgur.com/csW1n5w.png)
![](https://i.imgur.com/AK9MjD3.png)
![](https://i.imgur.com/rmKjClz.png)

### 4. Profile

登入後，點選右上的Profile，便可瀏覽個人資料。再點選Update Profile便可修改信箱或密碼，這邊不會提供原本密碼，所以若要保留原密碼，則將兩個**密碼欄位都留空白**。
![](https://i.imgur.com/jTu087P.png)
![](https://i.imgur.com/SmvN1bI.png)
![](https://i.imgur.com/KpA1f1V.png)


### `b.雲端硬碟`
### 1. 新增資料夾
首先點選右上方的資料夾icon。
![](https://i.imgur.com/zqkUku6.png)
輸入資料夾名稱。
![](https://i.imgur.com/bNpYo6g.png)
按下新增。
![](https://i.imgur.com/NOoJwsn.png)
進入資料夾後可發現上面的路徑有所改變，點選Root可回到根目錄。
![](https://i.imgur.com/N2PWEjN.png)

### 2. 上傳檔案
到想要上傳的資料夾點右上檔案icon。
![](https://i.imgur.com/5YF6d6S.png)
選擇檔案
![](https://i.imgur.com/aWoiY4x.png)
下方會出現上傳跑條
![](https://i.imgur.com/CHufOQj.png)
完成後便出現在頁面上
![](https://i.imgur.com/D8qGC5F.png)

### 2. 檔案瀏覽
點擊檔案後會彈出瀏覽視窗，目前可直接瀏覽的有**圖片及影片檔**。下方有檔案名稱以及檔案類型。
![](https://i.imgur.com/CFztMNT.png)
點擊左上Download按鈕可下載檔案。
![](https://i.imgur.com/imutCFL.png)
點擊右上X按鈕或點擊視窗外面可關閉視窗。
![](https://i.imgur.com/G27Ou8R.png)

### 3. 檔名修改
下方欄位可修改檔名，並按下黃色修改紐確認。要注意**檔名不能跟現有檔案重複**。
![](https://i.imgur.com/IvY0cpE.png)
修改成功。
![](https://i.imgur.com/EDqVb1Y.png)

### 4. 檔名刪除
點擊右下垃圾桶icon按鈕可刪除檔案。
![](https://i.imgur.com/zma7yR5.png)
由於是不可逆的操作，會需要做第二次的確認。
![](https://i.imgur.com/cZHnKcD.png)
刪除成功。
![](https://i.imgur.com/mmAtjlX.png)


### `c.後端管理`
### 1. Authentication
這邊只能看到用戶的帳號及UID等，安全考量，無法提取用戶密碼。
![](https://i.imgur.com/GJpjw69.png)

### 2. Cloud Firestore
分為兩個集合，一個存資料夾，一個存檔案資訊。以剛才的貓咪圖為例，可以看到儲存的資料有建立時間、所屬資料夾(null為根目錄)、檔名、儲存在Storage的路徑、檔案類型、URL及所屬用戶UID。
![](https://i.imgur.com/dN3y641.png)
設定各種讀寫權限，必須為有身分驗證的用戶及該用戶為此檔案的擁有者。
![](https://i.imgur.com/GC47l3g.png)


### 3. Storage
每個用戶會有各自的資料夾來存放檔案。
![](https://i.imgur.com/KgmYh7j.png)

## C. 小結 
以上就是此專案目前包含的功能，未來預計新增資料夾的修改、刪除，甚至到drag and drop各個檔案到不同資料夾等。歡迎有興趣的朋友上來玩玩看，由於我是使用免費的Firebase雲端空間，所以只有5GB的容量，不要傳太大的檔案上來哦，感謝!

## D. 技術整理(用來記錄我學到的新技術)
### a. `外部資源`
#### 1. Fortawesome + react
[Blog](https://hackmd.io/@a14506818/HkV4WaTBO)
#### 2. Boostrap + react
[Blog](https://hackmd.io/@a14506818/rk31sEpP_)
#### 3. Firebase
#### 4. uuid
[Blog](https://hackmd.io/@a14506818/HkCFwE6w_)
### b. `React相關`
#### 1. useRef
[Blog](https://hackmd.io/@a14506818/BkqgnWTOu)
#### 2. useContext
#### 3. useReducer
#### 4. ReactDOM
#### 5. 自製Hooks
#### 6. 自製Route / useHistory / useParams / useLocation
