export const Plan = () => {
	return (
		<div className="hotel-app">
			<header>
				<h1>HOTEL PLANISPHERE</h1>
				<nav>
					<ul>
						<li>
							<a href="/">ホーム</a>
						</li>
						<li>
							<a href="/reserve">宿泊予約</a>
						</li>
						<li>
							<a href="/register">会員登録</a>
						</li>
						<li>
							<a href="/login" className="login-btn">
								ログイン
							</a>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<h2>宿泊プラン一覧</h2>

				{/* おすすめプラン */}
				<div className="plan-card featured">
					<div className="plan-header">⭐おすすめプラン⭐</div>
					<div className="plan-content">
						<h3>お得な特典付きプラン</h3>
						<p>大人1名7,000円</p>
						<p>1名様から</p>
						<p>スタンダードツイン</p>
						<button type="button" className="reserve-btn">
							このプランで予約
						</button>
					</div>
					<div className="plan-footer">本日限り</div>
				</div>

				{/* 宿泊プラン一覧 */}
				<div className="plan-list">
					{/* 素泊まり */}
					<div className="plan-card">
						<div className="plan-content">
							<h3>素泊まり</h3>
							<p>大人1名5,500円</p>
							<p>1名様から</p>
							<p>シングル</p>
							<button type="button" className="reserve-btn">
								このプランで予約
							</button>
						</div>
					</div>

					{/* 出張ビジネスプラン */}
					<div className="plan-card">
						<div className="plan-content">
							<h3>出張ビジネスプラン</h3>
							<p>大人1名7,500円</p>
							<p>1名様から</p>
							<p>シングル</p>
							<button type="button" className="reserve-btn">
								このプランで予約
							</button>
						</div>
					</div>

					{/* エステ・マッサージプラン */}
					<div className="plan-card">
						<div className="plan-content">
							<h3>エステ・マッサージプラン</h3>
							<p>大人1名9,000円</p>
							<p>1名様から</p>
							<p>部屋指定なし</p>
							<button type="button" className="reserve-btn">
								このプランで予約
							</button>
						</div>
					</div>

					{/* 貸し切り露天風呂プラン */}
					<div className="plan-card">
						<div className="plan-content">
							<h3>貸し切り露天風呂プラン</h3>
							<p>大人1名9,000円</p>
							<p>1名様から</p>
							<p>部屋指定なし</p>
							<button type="button" className="reserve-btn">
								このプランで予約
							</button>
						</div>
					</div>

					{/* カップル限定プラン */}
					<div className="plan-card">
						<div className="plan-content">
							<h3>カップル限定プラン</h3>
							<p>大人1名8,000円</p>
							<p>2名様から</p>
							<p>プレミアムツイン</p>
							<button type="button" className="reserve-btn">
								このプランで予約
							</button>
						</div>
					</div>

					{/* テーマパーク優待プラン */}
					<div className="plan-card">
						<div className="plan-content">
							<h3>テーマパーク優待プラン</h3>
							<p>大人1名10,000円</p>
							<p>1名様から</p>
							<p>部屋指定なし</p>
							<button type="button" className="reserve-btn">
								このプランで予約
							</button>
						</div>
					</div>
				</div>
			</main>
			<footer>
				<a href="https://github.com">GitHub</a>
				<p>© 2020-2025 Takeshi Kishi</p>
			</footer>
		</div>
	);
};
