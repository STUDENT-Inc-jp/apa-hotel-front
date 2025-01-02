# ベースイメージとしてNode.jsを使用
FROM node:18-alpine

# 作業ディレクトリを作成
WORKDIR /app

# 必要なファイルをコピー
COPY package*.json ./

# パッケージのインストール
RUN npm install

# アプリケーションコードをコピー
COPY . .

# ビルドプロセス
RUN npm run build

# ポートを指定
EXPOSE 8080

# 環境変数 PORT を 8080 に設定
ENV PORT=8080

# アプリケーションの起動コマンド（Next.jsなら、"-p 8080" オプションが必要な場合あり）
CMD ["npm", "start", "--", "-p", "8080"]
