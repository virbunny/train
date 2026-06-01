# 日本觀光列車｜旅印帖 v55 PWA 版

## 檔案
- `index.html`
- `manifest.webmanifest`
- `service-worker.js`
- `tourist-train-rabbit-icon-v55-180.png`
- `tourist-train-rabbit-icon-v55-192.png`
- `tourist-train-rabbit-icon-v55-512.png`

## 透明桌面圖示處理
- 使用全新圖示檔名。
- manifest 只指向新的透明 PNG。
- 不提供 maskable 圖示。
- service worker 快取名稱已更新為 v55。
- 快取清單沒有沿用舊 icon 檔名。

## 安裝提醒
若手機或桌面仍顯示舊圖示，請先刪除舊 PWA／舊桌面捷徑，清除網站資料或快取後，再重新安裝。

## v55 更新
- 依週報更新 JR北海道ノロッコ系列現行車輛最後年度資訊。
- 補強くしろ湿原ノロッコ号：2026 現行車輛運行終了予定、ラストイヤー、引退倒數、ラストラン迫る。
- 補強富良野・美瑛ノロッコ号：現行車輛最後年度運行／現行車輛ラストイヤー。
- 新增ノロッコ川湯温泉号：2026 特別運行日公開。
- 新增夕陽ノロッコ号：2026 特別運行日公開。
- 更新記錄補上「JR北海道 ノロッコ系列現行車輛最後年度確認」。
- 清單總數更新為 172 筆；公司分類維持 62。
- localStorage 新 key：`jp_tourist_train_tabijirushi_v55_hokkaido_norokko_last_year`。
- 已將 v54 key 加入 LEGACY_KEYS。
