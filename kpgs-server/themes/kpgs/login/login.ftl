<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=social.displayInfo; section>
    <#if section = "title">
        ${msg("loginTitle",(realm.displayName!''))}
    <#elseif section = "header">
        <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet"/>
        <link href="${url.resourcesPath}/img/favicon.png" rel="icon"/>
        <script>
            function togglePassword() {
                var x = document.getElementById("password");
                var v = document.getElementById("vi");
                if (x.type === "password") {
                    x.type = "text";
                    v.src = "${url.resourcesPath}/img/eye.png";
                } else {
                    x.type = "password";
                    v.src = "${url.resourcesPath}/img/eye-off.png";
                }
            }
        </script>
    <#elseif section = "form">
        <div>
            <img class="logo" src="${url.resourcesPath}/img/logo-color.png" alt="파크골프">
        </div>
        <div class="box-container">
            <div>
                <p class="application-name">파크골프시스템 로그인</p>
            </div>
        <#if realm.password>
            <div class="form-wrap">
               <form id="kc-form-login" class="form" onsubmit="return true;" action="${url.loginAction}" method="post">
                 <div class="ipt">
                    <input id="username" class="login-field" placeholder="${msg("username")}" type="text" name="username" tabindex="1">
                 </div>
                 <div class="ipt">
                    <label class="visibility" id="v" onclick="togglePassword()"><img id="vi" src="${url.resourcesPath}/img/eye-off.png"></label>
                    <input id="password" class="login-field" placeholder="${msg("password")}" type="password" name="password" tabindex="2">
                 </div>
                    <input class="submit" type="submit" value="${msg("doLogIn")}" tabindex="3">
                </form>
            </div>
        </#if>
        <#if social.providers??>
            <p class="para">${msg("selectAlternative")}</p>
            <div id="social-providers" >
                <#list social.providers as p>
					<#switch p.alias>
						<#case "apple">
						  <input class="social-link-style" type="button" onclick="location.href='${p.loginUrl}';" value="${p.displayName}"/>
						  <#break>
						<#case "bitbucket">
						  <input class="social-link-style" type="button" onclick="location.href='${p.loginUrl}';" value="${p.displayName}"/>
						  <#break>
						<#case "discord">
						  <input class="social-link-style" type="button" onclick="location.href='${p.loginUrl}';" value="${p.displayName}"/>
						  <#break>
						<#case "facebook">
						  <input class="social-link-style" type="button" onclick="location.href='${p.loginUrl}';" value="${p.displayName}"/>
						  <#break>
						<#case "github">
						  <input class="social-link-style" type="button" onclick="location.href='${p.loginUrl}';" value="${p.displayName}"/>
						  <#break>
						<#case "gitlab">
						  <input class="social-link-style" type="button" onclick="location.href='${p.loginUrl}';" value="${p.displayName}"/>
						  <#break>
						<#case "google">
						  <input class="social-link-style" type="button" onclick="location.href='${p.loginUrl}';" value="${p.displayName}"/>
						  <#break>
						<#case "instagram">
						  <input class="social-link-style" type="button" onclick="location.href='${p.loginUrl}';" value="${p.displayName}"/>
						  <#break>
						<#case "linkedin-openid-connect">
						  <input class="social-link-style" type="button" onclick="location.href='${p.loginUrl}';" value="${p.displayName}"/>
						  <#break>
						<#case "microsoft">
						  <input class="social-link-style" type="button" onclick="location.href='${p.loginUrl}';" value="${p.displayName}"/>
						  <#break>
						<#case "oidc">
						  <input class="social-link-style" type="button" onclick="location.href='${p.loginUrl}';" value="${p.displayName}"/>
						  <#break>
						<#case "openshift-v3">
						  <input class="social-link-style" type="button" onclick="location.href='${p.loginUrl}';" value="${p.displayName}"/>
						  <#break>
						<#case "openshift-v4">
						  <input class="social-link-style" type="button" onclick="location.href='${p.loginUrl}';" value="${p.displayName}"/>
						  <#break>
						<#case "paypal">
						  <input class="social-link-style" type="button" onclick="location.href='${p.loginUrl}';" value="${p.displayName}"/>
						  <#break>
						<#case "slack">
						  <input class="social-link-style" type="button" onclick="location.href='${p.loginUrl}';" value="${p.displayName}"/>
						  <#break>
						<#case "stackoverflow">
						  <input class="social-link-style" type="button" onclick="location.href='${p.loginUrl}';" value="${p.displayName}"/>
						  <#break>
						<#case "twitter">
						  <input class="social-link-style" type="button" onclick="location.href='${p.loginUrl}';" value="${p.displayName}"/>
						  <#break>
						<#default>
						  <input class="social-link-style" type="button" onclick="location.href='${p.loginUrl}';" value="${p.displayName}"/>
					  </#switch>
                </#list>
            </div>
        </#if>
        </div>
        <div>
            <p class="copyright skip">&copy; ${msg("copyright", "${.now?string('yyyy')}")}</p>
        </div>
    </#if>
</@layout.registrationLayout>
