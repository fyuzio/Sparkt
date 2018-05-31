using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sparkt.DataAccess.Core.Dapper
{
    public static class DapperBase
    {
        public static Func<DbConnection> ConnectionFactory = () => new SqlConnection(ConnectionString.Connection);
        public static class ConnectionString
        {

            //DBIndiaRFEntities      --for web
            public static string Connection = ConfigurationManager.ConnectionStrings["SparktEntities"].ConnectionString;
        }

        public class SqlQuery
        {
            #region User Variables
            public const string GetUserDetailByEmail = "dbo.prcGetUserDetailsByUserName";
            public const string InsertUpdateRoleDetails = "dbo.prcInsertUpdateRoleDetails";
            public const string InsertUpdateUser = "dbo.prcInsertUpdateUser";
            public const string GetPermissionGroups = "dbo.prcGetPermissionGroups";
            public const string GetRolePermissions = "dbo.prcGetRolePermissions";
            public const string GetUserPermissions = "dbo.prcGetUserPermissions";
            public const string GetUserRoles = "dbo.prcGetUserRoles";
            public const string GetUsers = "dbo.prcGetUsers";
            public const string RemoveRole = "dbo.prcRemoveRole";
            public const string RemoveUser = "dbo.prcRemoveUser";
            public const string GetAllPermissions = "dbo.prcGetAllPermissions";
            public const string RolePermissionListsByUserId = "dbo.prcGetRolePermissionListsByUserId";
            #endregion

            #region Leads Variable
            public const string InsertLeads = "dbo.prcInsertLeads";
            public const string GetAllLeads = "dbo.prcGetLeadsWithFilter";//prcGetLeadsWithId
            public const string GetDownloadLeads = "dbo.prc_GetAllLeadData";//prcGetLeadsWithId
            public const string GetAllLeadsId = "dbo.prcGetLeadsWithId";
            #endregion
            #region socialLink Variables
            public const string socialLinkList = "dbo.prcgetAllSocialLink";
            public const string InsertUpdateGeneralSetting = "prcInsertUpdateGeneralSetting";
            public const string getAllGeneralSetting = "prcgetAllGeneralSetting";
            public const string InsertUpdateSocialSetting = "prcInsertUpdateSocialSetting";

            public const string InsertUpdateAnalyticTag = "dbo.prcInsertUpdateAnalyticTag";
            public const string GetAnalyticsTag = "prcGetAnalyticsTag";
            #endregion
            #region Generice Variables
            public const string GetVideoSources = "dbo.prcGetVideoSources";
            public const string GetCarouselAssets = "dbo.prcGetCarouselAssets";
            public const string GetTwitterCardTypeList = "dbo.prcTwitterCardType";
            public const string GetContentTypeList = "dbo.prcGetContentType";
            public const string GetSocialMediaList = "dbo.prcGetSocialMedia";
            public const string GetLanguages = "dbo.prcGetLanguages";
            #endregion
            #region Content Variables
            public const string DeleteArticle = "dbo.prcDeleteArticleWithContent";
            public const string GetContentCategoryType = "dbo.prcGetContentCategoryType";
            public const string GetContentCategoryByFilter = "dbo.prcGetContentCategoryByFilter";
            public const string InsertUpdateContentCategory = "dbo.prcInsertUpdateContentCategory";
            public const string UpdateCategoryStatus = "dbo.prcDeleteContentCategory";
            public const string ReorderItems = "dbo.prcChangeContentCategoryItemOrder";
            public const string UpdateArticleStatus = "dbo.prcUpdateArticleStatus";
            public const string GetArticlesWithFilter = "dbo.prcGetArticlesWithFilter";
            public const string InsertUpdateArticle = "dbo.prcInsertUpdateArticle";
            public const string InsertUpdateArticleContent = "dbo.prcInsertUpdateArticleContent";
            public const string DeleteArticleContent = "dbo.prcDeleteArticleContent";
            public const string GetArticle = "dbo.prcGetArticle";
            public const string GetArticleContent = "dbo.prcGetArticleContent";
            public const string GetMediaContentsByUrl = "dbo.prcGetMediaContentsByUrl";
            public const string GetCategoryByParentName = "dbo.prcGetCategoryByParentName";
            public const string UpdateArticleContent = "dbo.prcUpdateArticleContent";
            public const string GetVideoContent = "dbo.prcgetArticleVideoDatabyArtilceId";
            public const string getAllVideoContent = "dbo.pcrgetAllArticleVideo";
            public const string getArticleEpisode = "dbo.prcgetArticlewithEpisodes";
            public const string getAlbums = "dbo.prcgetAlbums";
            public const string getAlbumPage = "dbo.pcrGetAlbumPage";
            #endregion
            #region People Variables
            public const string AddUpdatePeople = "dbo.prcAddUpdatePeople";
            public const string GetAllPeople = "dbo.prcGetAllPeople";
            public const string GetPeopleById = "dbo.prcGetPeopleById";
            public const string UpdatePeopleStatus = "dbo.prcUpdatePeopleStatus";
            public const string ReArrangePeople = "dbo.prcReArrangePeople";
            #endregion
            #region Menu Variables
            public const string GetMenuTypes = "dbo.prcGetMenuTypes";
            public const string InsertUpdateMenuItem = "dbo.prcInsertUpdateMenu";
            public const string GetMenuList = "dbo.prcGetAllMenuItems";
            public const string ReorderMenuItems = "dbo.prcChangeMenuItemOrder";
            public const string DeleteMenuItem = "dbo.prcDeleteMenuItem";
            public const string GetMenusByUrl = "dbo.prcGetNavBreadcrumb";
            public const string GetMenuById = "dbo.prcGetMenuById";
            #endregion
            #region Carousel variables
            public const string GetCarouselContent = "dbo.prcGetCarouselContent";
            public const string GetCarousels = "dbo.prcGetCarousels";
            public const string GetCarouselWithFilter = "dbo.prcGetCarouselsWithFilter";
            public const string InsertUpdateCarousel = "dbo.prcInsertUpdateCarousel";
            public const string UpdateCarouselStatus = "dbo.prcUpdateCarouselStatus";
            public const string DeleteCarouselContent = "dbo.prcDeleteCarouselContent";
            public const string InsertUpdateCarouselContent = "dbo.prcInsertUpdateCarouselContent";
            public const string GetAllCarouselContent = "dbo.prcGetAllCarouselContent";
            #endregion

            #region Page Variables
            public const string GetAllPages = "dbo.prcgetAllPages";
            public const string EnableDisablePage = "dbo.prcDeactivatePage";
            public const string GetFilteredPages = "dbo.prcGetAllPages";
            public const string GetPagesWithFilters = "dbo.prcGetPagesWithFilter";
            public const string GetPageUrls = "dbo.prcGetPageUrls";
            public const string InsertUpdatePage = "dbo.prcInsertUpdatePage";
            public const string UpdatePageContent = "dbo.prcUpdatePageContent";
            #endregion
        }
    }
}
